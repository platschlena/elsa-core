﻿import {ActivityDefinitionProperty, WorkflowPersistenceBehavior} from "./domain";

export interface WorkflowModel {
  activities: Array<ActivityModel>
  connections: Array<ConnectionModel>
  persistenceBehavior?: WorkflowPersistenceBehavior,
}

export interface ActivityModel {
  activityId: string
  type: string
  name?: string
  displayName?: string
  description?: string
  outcomes: Array<string>
  properties: Array<ActivityDefinitionProperty>;
}

export interface ConnectionModel {
  sourceId: string,
  targetId: string,
  outcome: string
}
