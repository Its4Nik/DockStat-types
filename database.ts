//import { ComposeSpec } from "./docker-compose";

interface config {
  keep_data_for: number;
  fetching_interval: number;
}

interface stacks_config {
  id: number;
  name: string;
  version: number;
  custom: boolean;
  source: string;
  compose_spec: string;
}

interface log_message {
  level: string;
  timestamp: string;
  message: string;
  file: string;
  line: number;
}

export type { config, stacks_config, log_message };
