import type { HostStats } from "typings/docker";
import type { ComposeSpec } from "typings/docker-compose";
import type { StandardRes } from "./general";
import type {
  dockerContainerRes,
  logMessages,
  plugins,
  stackResponse,
} from "./types";
import type {
  BODYdockerConfigAddHost,
  BODYdockerConfigUpdateHost,
} from "./types";

interface DockStatAPIHeaders {
  "X-Api-Key": string;
}

export type get_routes =
  | "/docker/containers"
  | "/docker/hosts"
  | "/docker-config/hosts"
  | "/docker/hosts/*"
  | "/logs"
  | "/logs/*"
  | "/config"
  | "/config/plugins"
  | "/config/package"
  | "/config/backup"
  | "/config/backup/download"
  | "/stacks/status"
  | "/stacks"
  | "/utils/info"
  | "/health";

export type post_routes =
  | "/docker-config/add-host"
  | "/docker-config/update-host"
  | "/config/update"
  | "/config/backup"
  | "/config/restore"
  | "/stacks/deploy"
  | "/stacks/start"
  | "/stacks/stop"
  | "/stacks/restart"
  | "/stacks/pull-images";

export type del_routes = "/stacks" | "/logs/*" | "/docker-config/hosts/*";

export interface DockStatAPIClient {
  headers: DockStatAPIHeaders;
  docker?: {
    get_containers?: {
      res: dockerContainerRes;
    };
    get_hosts?: {
      get_id?: { res: HostStats };
      res: HostStats[];
    };
  };
  docker_config?: {
    post_add_host?: {
      body: BODYdockerConfigAddHost;
      res: StandardRes;
    };
    post_update_host?: {
      body: BODYdockerConfigUpdateHost;
      res: StandardRes;
    };
    del_docker_config_id?: {
      _path?: "API:<PORT>/docker/config/{id}:";
    };
  };
  logs?: {
    get_logs?: {
      res: logMessages;
      get_level?: {
        _path?: "API:<PORT>/docker/config/{id}:";
        res: logMessages;
      };
    };
    del_logs?: {
      del_level?: {
        _path?: "API:<PORT>/docker/config/{id}:";
        res: StandardRes;
      };
      res: StandardRes;
    };
  };
  config?: {
    get_config?: {
      fetching_interval: number;
      keep_data_for: number;
      api_key: string;
    };
    get_plugins?: {
      plugins: plugins[];
    };
    post_update?: {
      body?: {
        fetching_interval: number;
        keep_data_for: number;
        api_key: string;
      };
      res: StandardRes;
    };
    get_package?: {
      version: number;
      description: string;
      license: string;
      authorName: string;
      authorEmail: string;
      authorWebsite: string;
      contributors?: { [key: string]: URL };
      dependencies?: { [key: string]: string };
      devDependencies?: { [key: string]: string };
    };
    post_backup?: {
      res?: {
        _desc?: "The message is the filename of the download";
        message: string;
      };
    };
    get_backup: string[];
    get_backup_download?: { res_type?: Blob };
  };
  get_stacks?: {
    res: stackResponse[];
    post_deploy?: {
      body?: {
        compose_spec: ComposeSpec;
        name: string;
        version: number;
        automatic_reboot_on_error: boolean;
        isCustom: boolean;
        image_updates: boolean;
        source: string;
        stack_prefix: string;
      };
      res: StandardRes;
    };
    post_start?: {
      body?: {
        stackId: number;
      };
      res: StandardRes;
    };
    post_stop?: {
      stackId: number;
    };
    post_restart?: { stackId: number };
    post_pull_images?: { stackId: number };
    get_status?: {
      _path?: "Stack ID needed!!!!";
      res: {
        success: boolean;
        message: string;
        status: { [key: string]: string };
      };
    };
  };
  del_stacks: {
    body: {
      stackId: number;
      res: StandardRes;
    };
  };
  utils: {
    get_health: { status: "healthy" };
  };
}
