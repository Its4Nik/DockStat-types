//import { ComposeSpec } from "./docker-compose";

type Theme = {
  name: string;
  creator: string;
  tags: string[];
  vars: string;
};

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

interface container_stats {
  id: string;
  hostId: number;
  name: string;
  image: string;
  status: string;
  state: string;
  cpu_usage: number;
  memory_usage: number;
}
export type { Theme, container_stats, config, stacks_config, log_message };
