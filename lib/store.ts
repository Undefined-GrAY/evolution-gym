import { INITIAL_CLASSES, ClassItem } from './data';

export interface UserBooking {
  id: string;
  classId: string;
  className: string;
  time: string;
  day: string;
  trainer: string;
  bookedAt: string;
}

export interface UserProfile {
  name: string;
  email: string;
  tier: string;
  memberId: string;
}

// In-memory persistent state listener helper
type Listener = () => void;

let classes: ClassItem[] = [...INITIAL_CLASSES];
let userBookings: UserBooking[] = [
  {
    id: 'ub-1',
    classId: 'cls-1',
    className: 'Metabolic Conditioning & Strength',
    time: '08:00 AM',
    day: 'Today',
    trainer: 'Andriy Karpenko',
    bookedAt: 'Today at 07:15 AM'
  }
];

let currentUser: UserProfile = {
  name: 'Alex Vance',
  email: 'alex.vance@evolution.com',
  tier: 'TRANSIT',
  memberId: 'EVO-884920'
};

let isTrialModalOpen = false;
let isPhilosophyModalOpen = false;
let selectedClassForBooking: ClassItem | null = null;

const listeners: Set<Listener> = new Set();

const notify = () => {
  listeners.forEach((l) => l());
};

export const store = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  getClasses(): ClassItem[] {
    return classes;
  },

  getUserBookings(): UserBooking[] {
    return userBookings;
  },

  getCurrentUser(): UserProfile {
    return currentUser;
  },

  getIsTrialModalOpen(): boolean {
    return isTrialModalOpen;
  },

  setTrialModalOpen(open: boolean) {
    isTrialModalOpen = open;
    notify();
  },

  getIsPhilosophyModalOpen(): boolean {
    return isPhilosophyModalOpen;
  },

  setPhilosophyModalOpen(open: boolean) {
    isPhilosophyModalOpen = open;
    notify();
  },

  getSelectedClassForBooking(): ClassItem | null {
    return selectedClassForBooking;
  },

  setSelectedClassForBooking(cls: ClassItem | null) {
    selectedClassForBooking = cls;
    notify();
  },

  bookClass(classId: string): boolean {
    const target = classes.find((c) => c.id === classId);
    if (!target || target.spotsAvailable <= 0) return false;

    // Check if already booked
    const alreadyBooked = userBookings.some((b) => b.classId === classId);
    if (alreadyBooked) return false;

    // Decrement available spot
    classes = classes.map((c) =>
      c.id === classId ? { ...c, spotsAvailable: c.spotsAvailable - 1 } : c
    );

    // Add to user bookings
    const newBooking: UserBooking = {
      id: `ub-${Date.now()}`,
      classId: target.id,
      className: target.name,
      time: target.time,
      day: target.day,
      trainer: target.trainer,
      bookedAt: 'Just now'
    };

    userBookings = [newBooking, ...userBookings];
    notify();
    return true;
  },

  cancelBooking(bookingId: string) {
    const booking = userBookings.find((b) => b.id === bookingId);
    if (!booking) return;

    // Restore spot count
    classes = classes.map((c) =>
      c.id === booking.classId ? { ...c, spotsAvailable: c.spotsAvailable + 1 } : c
    );

    userBookings = userBookings.filter((b) => b.id !== bookingId);
    notify();
  },

  setUser(user: UserProfile) {
    currentUser = user;
    notify();
  }
};
