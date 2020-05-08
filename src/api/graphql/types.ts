export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};

export type Account = {
   __typename?: 'Account',
  user: User,
  info: AdditionalUserInfo,
  preferences: Preferences,
};

export type AdditionalUserInfo = {
   __typename?: 'AdditionalUserInfo',
  phoneNumber: Scalars['String'],
  email: Scalars['String'],
};

export type Address = {
   __typename?: 'Address',
  id: Scalars['ID'],
  placeId?: Maybe<Scalars['String']>,
  latLng: LatLng,
  description: Scalars['String'],
};

export type Bag = {
   __typename?: 'Bag',
  id: Scalars['ID'],
  code: Scalars['String'],
};

export type Client = {
   __typename?: 'Client',
  id: Scalars['String'],
  user: User,
};

export type Courier = {
   __typename?: 'Courier',
  id: Scalars['String'],
  user: User,
  revision?: Maybe<DocumentsRevision>,
};

export type CreateAddressRequest = {
  placeId?: Maybe<Scalars['String']>,
  latLng: LatLngInput,
  description: Scalars['String'],
};


export type Document = {
   __typename?: 'Document',
  id: Scalars['ID'],
  group: DocumentGroup,
  fileId: Scalars['String'],
};

export enum DocumentGroup {
  W4 = 'w4',
  CarInsurance = 'carInsurance',
  DriversLicense = 'driversLicense',
  LicensePlate = 'licensePlate',
  CarRegistration = 'carRegistration'
}

export type DocumentsRevision = {
   __typename?: 'DocumentsRevision',
  id: Scalars['String'],
  comment: Scalars['String'],
  status: DocumentsRevisionStatus,
};

export enum DocumentsRevisionStatus {
  New = 'New',
  VerificationRequested = 'VerificationRequested',
  ChangesRequested = 'ChangesRequested',
  Approved = 'Approved',
  Rejected = 'Rejected'
}

export enum EvaluateDocumentsRevisionType {
  Approve = 'Approve',
  RequestChanges = 'RequestChanges',
  Reject = 'Reject'
}

export type InformationPage = {
   __typename?: 'InformationPage',
  id: Scalars['ID'],
  key: Scalars['String'],
  title: Scalars['String'],
  body: Scalars['String'],
};

export type LatLng = {
   __typename?: 'LatLng',
  lat: Scalars['Float'],
  lng: Scalars['Float'],
};

export type LatLngInput = {
  lat: Scalars['Float'],
  lng: Scalars['Float'],
};

export type Laundry = {
   __typename?: 'Laundry',
  id: Scalars['ID'],
  title: Scalars['String'],
  imageId: Scalars['String'],
  additionalInfo: Scalars['String'],
  contactPerson: Scalars['String'],
  website: Scalars['String'],
  address: Address,
  beginningOfWorkingDay: Scalars['DateTime'],
  endOfWorkingDay: Scalars['DateTime'],
  isAvailable: Scalars['Boolean'],
  services: Scalars['String'],
  phoneNumber: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  updateMyAccount: Account,
  updateMyAccountPreferences: Account,
  updateMyAccountImage: Scalars['Boolean'],
  createLaundry: Laundry,
  updateLaundryInformation: Scalars['Boolean'],
  setIsAvailable: Scalars['Boolean'],
  updateLaundry: Scalars['Boolean'],
  createOrder: Order,
  evaluateOrder: Scalars['Boolean'],
  payForOrder: RequestedPayment,
  payForWashing: RequestedPayment,
  setWashingInfo: Scalars['Boolean'],
  acceptOrder: Scalars['Boolean'],
  markOrder: Scalars['Boolean'],
  deleteOrder: Scalars['Boolean'],
  addDocument: Document,
  deleteDocument: Scalars['Boolean'],
  requestDocumentsRevisionVerification: Scalars['Boolean'],
  evaluateDocumentsRevision: Scalars['Boolean'],
  updateLocation: Scalars['Boolean'],
  updateClientInformation: Scalars['Boolean'],
  createOrUpdateInformationPage: InformationPage,
  getPaid: Scalars['Boolean'],
  setPaypalId: Scalars['Boolean'],
};


export type MutationUpdateMyAccountArgs = {
  user: UserUpdateRequest
};


export type MutationUpdateMyAccountPreferencesArgs = {
  allowNotifications: Scalars['Boolean']
};


export type MutationUpdateMyAccountImageArgs = {
  image: Scalars['String']
};


export type MutationCreateLaundryArgs = {
  phoneNumber: Scalars['String'],
  services: Scalars['String'],
  workHours: WorkHours,
  address: CreateAddressRequest,
  contactPerson: Scalars['String'],
  additionalInfo: Scalars['String'],
  website: Scalars['String'],
  image: Scalars['ID'],
  title: Scalars['String']
};


export type MutationUpdateLaundryInformationArgs = {
  phoneNumber: Scalars['String'],
  services: Scalars['String'],
  endOfWorkingDay: Scalars['DateTime'],
  beginningOfWorkingDay: Scalars['DateTime'],
  lng: Scalars['Float'],
  lat: Scalars['Float'],
  addressDescription: Scalars['String'],
  website: Scalars['String'],
  contactPerson: Scalars['String'],
  additionalInfo: Scalars['String'],
  title: Scalars['String'],
  id: Scalars['ID']
};


export type MutationSetIsAvailableArgs = {
  isAvailable: Scalars['Boolean']
};


export type MutationUpdateLaundryArgs = {
  phoneNumber: Scalars['String'],
  services: Scalars['String'],
  endOfWorkingDay: Scalars['DateTime'],
  beginningOfWorkingDay: Scalars['DateTime'],
  address: CreateAddressRequest,
  contactPerson: Scalars['String'],
  additionalInfo: Scalars['String'],
  website: Scalars['String'],
  image: Scalars['String'],
  title: Scalars['String']
};


export type MutationCreateOrderArgs = {
  preferredService: Scalars['String'],
  isOneWay: Scalars['Boolean'],
  latLng?: Maybe<LatLngInput>,
  unlockCode: Scalars['String'],
  comment: Scalars['String'],
  clientAddress: CreateAddressRequest,
  weight: Scalars['Float'],
  bagIds: Array<Scalars['String']>,
  laundryId: Scalars['String']
};


export type MutationEvaluateOrderArgs = {
  rating: Scalars['Float'],
  id: Scalars['String']
};


export type MutationPayForOrderArgs = {
  id: Scalars['String']
};


export type MutationPayForWashingArgs = {
  id: Scalars['String']
};


export type MutationSetWashingInfoArgs = {
  washingFinish: Scalars['DateTime'],
  price: Scalars['Float'],
  weight: Scalars['Float'],
  orderId: Scalars['String']
};


export type MutationAcceptOrderArgs = {
  id: Scalars['String']
};


export type MutationMarkOrderArgs = {
  latLng?: Maybe<LatLngInput>,
  action: Scalars['String'],
  bagIds: Array<Scalars['String']>,
  orderId: Scalars['String']
};


export type MutationDeleteOrderArgs = {
  orderId: Scalars['ID']
};


export type MutationAddDocumentArgs = {
  group: DocumentGroup,
  fileId: Scalars['ID']
};


export type MutationDeleteDocumentArgs = {
  documentId: Scalars['ID']
};


export type MutationRequestDocumentsRevisionVerificationArgs = {
  revisionId: Scalars['ID']
};


export type MutationEvaluateDocumentsRevisionArgs = {
  comment: Scalars['String'],
  type: EvaluateDocumentsRevisionType,
  courierId: Scalars['ID']
};


export type MutationUpdateLocationArgs = {
  latLng: LatLngInput
};


export type MutationUpdateClientInformationArgs = {
  phoneNumber: Scalars['String'],
  email: Scalars['String'],
  birthday: Scalars['DateTime'],
  name: Scalars['String'],
  id: Scalars['ID']
};


export type MutationCreateOrUpdateInformationPageArgs = {
  body: Scalars['String'],
  title: Scalars['String'],
  key: Scalars['String']
};


export type MutationGetPaidArgs = {
  amount: Scalars['Int']
};


export type MutationSetPaypalIdArgs = {
  code: Scalars['String']
};

export type Order = {
   __typename?: 'Order',
  id: Scalars['String'],
  client: User,
  laundry: Laundry,
  comment: Scalars['String'],
  bags: Array<Bag>,
  number: Scalars['Float'],
  orderInfo: OrderInfo,
  created: Scalars['DateTime'],
  washingInfo?: Maybe<WashingInfo>,
  placement: OrderPlacement,
  state: OrderState,
  firstCourierId?: Maybe<Scalars['String']>,
  secondCourierId?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['String']>,
  unlockCode: Scalars['String'],
  myOrder: Scalars['Boolean'],
  preferredService: Scalars['String'],
};

export type OrderInfo = {
   __typename?: 'OrderInfo',
  id: Scalars['String'],
  weight: Scalars['Float'],
  clientAddress: Address,
  distanceMiles: Scalars['Float'],
  priceCents: Scalars['Int'],
  isOneWay: Scalars['Boolean'],
};

export enum OrderPlacement {
  Client = 'Client',
  Laundry = 'Laundry'
}

export enum OrderState {
  WaitingForPayment = 'WaitingForPayment',
  ReadyForDelivery = 'ReadyForDelivery',
  AcceptedByCourier = 'AcceptedByCourier',
  AcceptedByLaundry = 'AcceptedByLaundry',
  Delivering = 'Delivering',
  Delivered = 'Delivered',
  Washing = 'Washing',
  Completed = 'Completed'
}

export type Preferences = {
   __typename?: 'Preferences',
  allowNotifications: Scalars['Boolean'],
};

export type Query = {
   __typename?: 'Query',
  myAccount: Account,
  laundryById: Laundry,
  currentLaundry?: Maybe<Laundry>,
  laundries: Array<Laundry>,
  orders: Array<Order>,
  orderById: Order,
  orderState: OrderState,
  ordersForDelivery: Array<Order>,
  ordersForWash: Array<Order>,
  orderHistory: Array<Order>,
  currentOrder?: Maybe<Order>,
  bagByCode: Bag,
  bagsByOrderId: Array<Bag>,
  currentRevision?: Maybe<DocumentsRevision>,
  documents: Array<Document>,
  distanceToLaundry: Scalars['Float'],
  userLocation: LatLng,
  couriers: Array<Courier>,
  courierById: Courier,
  clients: Array<Client>,
  clientById: Client,
  informationPages: Array<InformationPage>,
  informationPageById: InformationPage,
  informationPageByKey: InformationPage,
  transactions: Array<Transaction>,
};


export type QueryLaundryByIdArgs = {
  laundryId: Scalars['ID']
};


export type QueryOrderByIdArgs = {
  id: Scalars['ID']
};


export type QueryOrderStateArgs = {
  id: Scalars['ID']
};


export type QueryOrdersForWashArgs = {
  type: WashingOrdersType
};


export type QueryBagByCodeArgs = {
  code: Scalars['String']
};


export type QueryBagsByOrderIdArgs = {
  id: Scalars['String']
};


export type QueryDocumentsArgs = {
  revisionId: Scalars['ID']
};


export type QueryDistanceToLaundryArgs = {
  latLng: LatLngInput,
  laundryId: Scalars['String']
};


export type QueryUserLocationArgs = {
  id: Scalars['String']
};


export type QueryCourierByIdArgs = {
  courierId: Scalars['ID']
};


export type QueryClientByIdArgs = {
  clientId: Scalars['ID']
};


export type QueryInformationPageByIdArgs = {
  informationPageId: Scalars['ID']
};


export type QueryInformationPageByKeyArgs = {
  key: Scalars['String']
};

export type RequestedPayment = {
   __typename?: 'RequestedPayment',
  orderId: Scalars['String'],
  redirectUrl?: Maybe<Scalars['String']>,
  status: Scalars['Float'],
};

export type Transaction = {
   __typename?: 'Transaction',
  id: Scalars['String'],
  created: Scalars['DateTime'],
  transaction: Scalars['String'],
  quantity: Scalars['Float'],
  amountTotal: Scalars['Float'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  birthday: Scalars['DateTime'],
  image: Scalars['String'],
  latLng?: Maybe<LatLng>,
  additionalUserInfo?: Maybe<AdditionalUserInfo>,
};

export type UserUpdateRequest = {
  name: Scalars['String'],
  birthday: Scalars['DateTime'],
  email: Scalars['String'],
  phoneNumber: Scalars['String'],
};

export type WashingInfo = {
   __typename?: 'WashingInfo',
  weight: Scalars['Float'],
  price: Scalars['Int'],
  washingFinish: Scalars['DateTime'],
};

export enum WashingOrdersType {
  New = 'New',
  InProgress = 'InProgress',
  Finished = 'Finished'
}

export type WorkHours = {
  opening: Scalars['DateTime'],
  closing: Scalars['DateTime'],
};
