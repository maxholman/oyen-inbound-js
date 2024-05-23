/**
 * This file is auto generated by @block65/openapi-codegen
 *
 * WARN: Do not edit directly.
 *
 * Generated on 2024-05-23T03:49:41.606Z
 *
 */

export type Uuid = string;

export enum Sku {
  Email = 'email',
  Sms = 'sms',
  Event = 'event',
  Webhook = 'webhook',
}

export type PaymentDetails = {
  url: string;
};
export type DomainName = string;
export type TokenSchema = string;
export type Id = string;
export type IsoTimestamp = string;
export type InboxEventSource = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
} & {
  teamId: Id;
  eventSourceId: Id;
  channelId: Id;
  endpoint: string;
  accessToken: TokenSchema;
};
export type Description = string;
export type EmailHandle = string;
export type EmailInbox = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
} & {
  teamId: Id;
  inboxId: Id;
  kind: 'email';
  handle: EmailHandle;
  domain: 'oyenbound.com';
  description?: Description | undefined;
};
export type EmailInboxList = EmailInbox[];
export type Email = string;
export type GetPaymentDetailsRequest = {
  email: Email;
};
export type Int32Bit = number;
export type UseQuotaRequest = {
  quantity: Int32Bit;
};
export type Quota = {
  teamId: Id;
  sku: 'email' | 'sms' | 'event' | 'webhook';
  quantity: Int32Bit;
  used: Int32Bit;
  updateTime?: IsoTimestamp | undefined;
};
export type Quotas = Quota[];
export type Name = string;
export type EventSource = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
} & {
  teamId: Id;
  eventSourceId: Id;
  label: Name;
  description?: Description | undefined;
  endpoint: string;
};
export type EventSources = EventSource[];
export type UpdateEventSourceRequest = {
  label?: Name | undefined;
  description?: Description | null | undefined;
  endpoint?: string | undefined;
};
export type CreateEventSourceRequest = {
  label: Name;
  description?: Description | undefined;
};
export type JwkPublic = {
  kty: 'RSA';
  n: string;
  e: 'AQAB';
  alg: 'RS256';
};
export type Key = {
  teamId: Id;
  keyId: Id;
  label: Name;
  description?: Description | undefined;
  publicKey: JwkPublic;
};
export type Keys = Key[];
export type GetKeyRequest = {
  teamId: Id;
  keyId: Id;
};
export type UpdateKeyRequest = {
  label?: Name | undefined;
  description?: Description | null | undefined;
};
export type CreateKeyRequest = {
  label: Name;
  description?: Description | undefined;
  publicKey: JwkPublic;
};
export type SmsHandle = string;
export type SmsInbox = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
} & {
  teamId: Id;
  inboxId: Id;
  kind: 'sms';
  handle?: SmsHandle | undefined;
  description?: Description | undefined;
};
export type InboxKind = EmailInbox | SmsInbox;
export type InboxList = InboxKind[];
export type UpdateInboxRequest = {
  description?: Description | null | undefined;
};
export type CreateEmailInboxRequest = {
  kind: 'email';
  handle: EmailHandle;
  domain: 'oyenbound.com';
  description?: Description | undefined;
};

export enum Role {
  Owner = 'owner',
}

export type UserId = string;
export type TeamMember = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
} & {
  teamId: Id;
  userId: UserId;
  role: Role;
};
export type TeamMembers = TeamMember[];
export type RealtimeKey = string;
export type Team = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
} & {
  teamId: Id;
  teamName: Name;
  realtimeKey: RealtimeKey;
};
export type Teams = Team[];
export type UpdateTeamRequest = {
  teamName?: Name | undefined;
};
export type CreateTeamRequest = {
  teamName: Name;
};
export type GetTeamRequest = {
  teamId: Id;
};
export type UserSettings = {
  userId: UserId;
  tokens?:
    | {
        oyen: TokenSchema;
      }
    | undefined;
  updateTime?: IsoTimestamp | undefined;
};
export type Timestamps = {
  createTime: IsoTimestamp;
  updateTime?: IsoTimestamp | undefined;
};
export type CreateTeamCommandInput = CreateTeamRequest;
export type CreateTeamCommandBody = CreateTeamRequest;
export type ListTeamsCommandInput = void;
export type ListTeamsCommandBody = void;
export type GetTeamCommandParams = {
  teamId: string;
};
export type GetTeamCommandInput = GetTeamCommandParams;
export type GetTeamCommandBody = void;
export type UpdateTeamCommandParams = {
  teamId: string;
};
export type UpdateTeamCommandInput = UpdateTeamRequest &
  UpdateTeamCommandParams;
export type UpdateTeamCommandBody = UpdateTeamRequest;
export type ListTeamMembersCommandParams = {
  teamId: string;
};
export type ListTeamMembersCommandInput = ListTeamMembersCommandParams;
export type ListTeamMembersCommandBody = void;
export type ListInboxesCommandParams = {
  teamId: string;
};
export type ListInboxesCommandInput = ListInboxesCommandParams;
export type ListInboxesCommandBody = void;
export type CreateInboxCommandParams = {
  teamId: string;
};
export type CreateInboxCommandInput = CreateEmailInboxRequest &
  CreateInboxCommandParams;
export type CreateInboxCommandBody = CreateEmailInboxRequest;
export type GetInboxCommandParams = {
  teamId: string;
  inboxId: string;
};
export type GetInboxCommandInput = GetInboxCommandParams;
export type GetInboxCommandBody = void;
export type UpdateInboxCommandParams = {
  teamId: string;
  inboxId: string;
};
export type UpdateInboxCommandInput = UpdateInboxRequest &
  UpdateInboxCommandParams;
export type UpdateInboxCommandBody = UpdateInboxRequest;
export type ListKeysCommandParams = {
  teamId: string;
};
export type ListKeysCommandInput = ListKeysCommandParams;
export type ListKeysCommandBody = void;
export type CreateKeyCommandParams = {
  teamId: string;
};
export type CreateKeyCommandInput = CreateKeyRequest & CreateKeyCommandParams;
export type CreateKeyCommandBody = CreateKeyRequest;
export type GetKeyCommandParams = {
  teamId: string;
  keyId: string;
};
export type GetKeyCommandInput = GetKeyCommandParams;
export type GetKeyCommandBody = void;
export type UpdateKeyCommandParams = {
  teamId: string;
  keyId: string;
};
export type UpdateKeyCommandInput = UpdateKeyRequest & UpdateKeyCommandParams;
export type UpdateKeyCommandBody = UpdateKeyRequest;
export type CreateEventSourceCommandParams = {
  teamId: string;
};
export type CreateEventSourceCommandInput = CreateEventSourceRequest &
  CreateEventSourceCommandParams;
export type CreateEventSourceCommandBody = CreateEventSourceRequest;
export type ListEventSourcesCommandParams = {
  teamId: string;
};
export type ListEventSourcesCommandInput = ListEventSourcesCommandParams;
export type ListEventSourcesCommandBody = void;
export type GetEventSourceCommandParams = {
  teamId: string;
  eventSourceId: string;
};
export type GetEventSourceCommandInput = GetEventSourceCommandParams;
export type GetEventSourceCommandBody = void;
export type UpdateEventSourceCommandParams = {
  teamId: string;
  eventSourceId: string;
};
export type UpdateEventSourceCommandInput = UpdateEventSourceRequest &
  UpdateEventSourceCommandParams;
export type UpdateEventSourceCommandBody = UpdateEventSourceRequest;
export type DeleteEventSourceCommandParams = {
  teamId: string;
  eventSourceId: string;
};
export type DeleteEventSourceCommandInput = DeleteEventSourceCommandParams;
export type DeleteEventSourceCommandBody = void;
export type ListQuotasCommandParams = {
  teamId: string;
};
export type ListQuotasCommandInput = ListQuotasCommandParams;
export type ListQuotasCommandBody = void;
export type UseQuotaCommandParams = {
  teamId: string;
  sku: string;
};
export type UseQuotaCommandInput = UseQuotaRequest & UseQuotaCommandParams;
export type UseQuotaCommandBody = UseQuotaRequest;
export type GetPaymentDetailsCommandParams = {
  teamId: string;
};
export type GetPaymentDetailsCommandInput = GetPaymentDetailsRequest &
  GetPaymentDetailsCommandParams;
export type GetPaymentDetailsCommandBody = GetPaymentDetailsRequest;
export type GetUserSettingsCommandParams = {
  userId: string;
};
export type GetUserSettingsCommandInput = GetUserSettingsCommandParams;
export type GetUserSettingsCommandBody = void;
export type ListDomainInboxesCommandParams = {
  domainName: string;
};
export type ListDomainInboxesCommandInput = ListDomainInboxesCommandParams;
export type ListDomainInboxesCommandBody = void;
export type GetDomainInboxCommandParams = {
  domainName: string;
  handle: string;
};
export type GetDomainInboxCommandInput = GetDomainInboxCommandParams;
export type GetDomainInboxCommandBody = void;
export type GetNumberInboxCommandParams = {
  handle: string;
};
export type GetNumberInboxCommandInput = GetNumberInboxCommandParams;
export type GetNumberInboxCommandBody = void;
export type GetInboxEventSourceCommandParams = {
  teamId: string;
  inboxId: string;
};
export type GetInboxEventSourceCommandInput = GetInboxEventSourceCommandParams;
export type GetInboxEventSourceCommandBody = void;
