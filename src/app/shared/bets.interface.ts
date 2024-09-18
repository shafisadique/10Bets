// session.model.ts
export interface SessionData {
    team: string;
    amount: number;
    rate: number;
    mode: string;
  }
  
  export interface SessionBet {
    title: string;
    amount: number;
    rate: number;
    run: number;
    mode: string;
  }
  // session-bets.interface.ts
export interface SessionBetLedger {
    date: string;
    time: string;
    remark: string;
    wonBy: string;
    won: number;
    lost: number;
    balance: number;
  }
  
 export  const sessions = [
    { team: 'INDIA', amount: 1000, rate: 0.85, mode: 'YES' },
    { team: 'INDIA', amount: 500, rate: 0.80, mode: 'NO' }
  ];  
  export const  sessionBets = [
    { title: '10 Over Run Nor', amount: 1000, rate: 0.80, run: 62, mode: 'Yes' }
  ];
  export const sessionBetsLedgerData = [
    { date: '01-08-2024', time: '02:00 PM', remark: 'INDIA VS AUSTRALIA', wonBy: 'INDIA', won: 500, lost: 0, balance: 50500 },
    { date: '02-08-2024', time: '04:30 PM', remark: 'SOUTH AFRICA VS SRILANKA', wonBy: 'SOUTH AFRICA', won: 0, lost: 300, balance: 50200 },
    { date: '03-08-2024', time: '06:00 PM', remark: 'ENGLAND VS AUSTRALIA', wonBy: 'ENGLAND', won: 700, lost: 0, balance: 50900 },
    { date: '04-08-2024', time: '07:00 PM', remark: 'AFGHANISTAN VS NEWZELAND', wonBy: 'ABOURT', won: 0, lost: 500, balance: 50400 },
    { date: '05-08-2024', time: '08:00 PM', remark: 'WESTINDIES VS PAKISTAN', wonBy: 'WESTINDIES', won: 1000, lost: 0, balance: 51400 },
    { date: '06-08-2024', time: '09:00 PM', remark: 'Match 6', wonBy: 'Team A', won: 800, lost: 0, balance: 52200 },
    { date: '07-08-2024', time: '10:00 PM', remark: 'Match 7', wonBy: 'Team B', won: 0, lost: 400, balance: 51800 },
    { date: '08-08-2024', time: '11:00 PM', remark: 'Match 8', wonBy: 'Team A', won: 600, lost: 0, balance: 52400 },
    { date: '09-08-2024', time: '12:00 PM', remark: 'Match 9', wonBy: 'Team C', won: 0, lost: 500, balance: 51900 },
    { date: '10-08-2024', time: '01:00 PM', remark: 'Match 10', wonBy: 'Team D', won: 1200, lost: 0, balance: 53100 }
  
  ]