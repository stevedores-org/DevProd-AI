
export interface MetricData {
  value: number;
  label: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
}

export interface SDLCPhaseMetrics {
  ideation: number;
  planning: number;
  design: number;
  implementation: number;
}

export interface ProductivityData {
  taskCompletionTime: SDLCPhaseMetrics;
  errorRate: SDLCPhaseMetrics;
  defectDensity: SDLCPhaseMetrics;
  velocity: {
    totalIssues: number;
    completedIssues: number;
    averageLeadTime: number;
  };
}

export interface IntegrationStatus {
  jira: boolean;
  github: boolean;
  monday: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
