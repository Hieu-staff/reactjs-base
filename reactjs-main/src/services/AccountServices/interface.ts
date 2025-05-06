export interface IAccount {
  id?: number
  activated?: boolean
  authorities?: string[]
  email?: string
  firstName?: string
  langKey?: string
  lastName?: string
  login?: string
  imageUrl?: string
  phone?: string
  dob?: Date
  gender?: string
  address?: string
  avatar?: string
  custType?: string
  custId?: number
  orgIn?: string
  orgId?: number
  orgName?: string
  parentOrgName?: string
  taxCodeOrg?: string
  acNameOrg?: string
  signature?: string
  orgCode?: string
  digitalSignature?: any
  organization?: any
  subOrganizations?: any
}

export interface IResponseLogin {
  access_token: string
  expires_in: number
  refresh_token: string
}

export interface IResponseTwoFactor {
  active: boolean
  attribute?: any
  createdBy?: string
  createdDate?: string
  custId?: number
  email?: string
  id?: number
  lastModifiedBy?: string
  lastModifiedDate?: string
  name?: string
  orgIn?: string
  type?: string
  userId?: number
}
