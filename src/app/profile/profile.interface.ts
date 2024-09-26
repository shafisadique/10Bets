export interface Profile {
    joindate: string;         // The date when the organization joined
    code: string;             // Organization code
    address: string;          // Organization address
    name: string;             // Name of the organization
    rateDiffSelect: number;   // Selected rate difference value
    reteDiffList: {           // Rate difference list with associated values
      [key: string]: number;  // Key-value pairs where key is a string and value is a number
    };
    helpLine: string;         // Helpline contact information
    coin: number;             // Coin balance or amount
    status: boolean;          // Status of the organization (active or not)
    contactno: string;        // Contact number
  }
  