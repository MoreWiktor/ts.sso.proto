import * as jspb from 'google-protobuf'



export class SigninRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): SigninRequest;

  getPassword(): string;
  setPassword(value: string): SigninRequest;

  getServiceId(): string;
  setServiceId(value: string): SigninRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigninRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SigninRequest): SigninRequest.AsObject;
  static serializeBinaryToWriter(message: SigninRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigninRequest;
  static deserializeBinaryFromReader(message: SigninRequest, reader: jspb.BinaryReader): SigninRequest;
}

export namespace SigninRequest {
  export type AsObject = {
    login: string,
    password: string,
    serviceId: string,
  }
}

export class SigninResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): SigninResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigninResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SigninResponse): SigninResponse.AsObject;
  static serializeBinaryToWriter(message: SigninResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigninResponse;
  static deserializeBinaryFromReader(message: SigninResponse, reader: jspb.BinaryReader): SigninResponse;
}

export namespace SigninResponse {
  export type AsObject = {
    token: string,
  }
}

