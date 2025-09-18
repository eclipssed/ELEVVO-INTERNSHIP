"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "job-tracker:applications:v1";

export type JobStatus = "Applied" | "Interviewing" | "Offer" | "Rejected";

export interface Job {
  id: string;
  company: string;
  title: string;
  status: JobStatus;
  date: string;
  notes?: string;
}

function loadFromStorage(): Job[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Job[];
  } catch (e) {
    console.error(e);
    return [];
  }
}

function saveToStorage(list: Job[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

interface JobsContextValue {
  jobs: Job[];
  addJob: (job: Omit<Job, "id">) => void;
  updateJob: (id: string, patch: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  setAll: (list: Job[]) => void;
  clearAll: () => void;
}

const JobsContext = createContext<JobsContextValue | null>(null);

export default function JobsProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(() => loadFromStorage());

  useEffect(() => {
    saveToStorage(jobs);
  }, [jobs]);

  const addJob = (job: Omit<Job, "id">) =>
    setJobs((s) => [{ ...job, id: uuidv4() }, ...s]);

  const updateJob = (id: string, patch: Partial<Job>) =>
    setJobs((s) => s.map((j) => (j.id === id ? { ...j, ...patch } : j)));

  const deleteJob = (id: string) =>
    setJobs((s) => s.filter((j) => j.id !== id));

  const setAll = (list: Job[]) => setJobs(list);

  const clearAll = () => setJobs([]);

  return (
    <JobsContext.Provider
      value={{ jobs, addJob, updateJob, deleteJob, setAll, clearAll }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  const ctx = useContext(JobsContext);
  if (!ctx) throw new Error("useJobs must be used inside JobsProvider");
  return ctx;
}
