export interface User {
    code:string;
    password:string;
  }
  export interface LoginResponse {
    isSuccess:boolean;
    message:string;
    data:{
      jwt: {
      accessToken: string;
      tokenType: string;
      };
    }
  }
  