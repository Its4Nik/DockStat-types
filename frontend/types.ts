import type { log_message } from "typings/database";
import type { ContainerInfo } from "typings/docker";

export interface BODYdockerConfigAddHost {
  name: string;
  hostAdress: string;
  secure: boolean;
}

export interface BODYdockerConfigUpdateHost {
  id: number;
  name: string;
  hostAdress: string;
  secure: boolean;
}

export interface logMessages {
  message: log_message[];
}

export interface dockerContainerRes {
  ok?: ContainerInfo;
  error?: "Failed to retrieve containers";
}

export interface plugins {
  name: string;
  version: string;
  status: "active" | "error" | "inactive";
}

export interface stackResponse {
  id: number;
  name: string;
  version: number;
  custom: 1 | 0;
  source: string;
  container_count: number;
  stack_prefix: string;
  automatic_reboot_on_error: 1 | 0;
  image_updates: 1 | 0;
}
