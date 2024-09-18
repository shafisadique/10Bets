export interface Bet {
    title: string;
    value: string;
  }
  
  export interface Match {
    team1: string;
    team2: string;
    team1Img: string;
    team2Img: string;
    isLive: boolean;
    matchcode: string;
    dateTime?: string;  // This will be optional, and used for upcoming matches
    bets: Bet[];
  }
  
  export interface Sport {
    id: string;
    name: string;
    logo: string;
    matches: Match[];
  }
  
  export const sports: Sport[] = [
    {
      id: 'cricket',
      name: 'Cricket',
      logo: 'assets/ball.png',
      matches: [
        {
          team1: 'India',
          team2: 'Sri Lanka',
          team1Img: 'assets/india.png',
          team2Img: 'assets/srilanka.png',
          isLive: true,
          matchcode: 'A32',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'ODI' },
          ],
        },
        {
          team1: 'England',
          team2: 'Australia',
          team1Img: 'assets/eng.png',
          team2Img: 'assets/aus.png',
          isLive: false,
          matchcode: 'A45',
          dateTime: '2024-09-18 18:30',  // DateTime for upcoming match
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'ODI' },
          ],
        },
        {
          team1: 'South Africa',
          team2: 'Afghanistan',
          team1Img: 'assets/southafrica.png',
          team2Img: 'assets/afg.png',
          isLive: false,
          matchcode: 'A67',
          dateTime: '2024-09-19 14:00',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'ODI' },
          ],
        },
        {
            team1: 'New Zeland',
            team2: 'Srilanka',
            team1Img: 'assets/newzeland.png',
            team2Img: 'assets/srilanka.png',
            isLive: false,
            matchcode: 'A67',
            dateTime: '2024-09-19 14:00',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'ODI' },
            ],
          },
      ],
    },
    {
      id: 'football',
      name: 'Football',
      logo: 'assets/football.png',
      matches: [
        {
          team1: 'Canada',
          team2: 'Colombia',
          team1Img: 'assets/canada.png',
          team2Img: 'assets/colombia.png',
          isLive: true,
          matchcode: 'B12',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Friendly' },
          ],
        },
        {
          team1: 'France',
          team2: 'United State',
          team1Img: 'assets/france.png',
          team2Img: 'assets/us.png',
          isLive: false,
          matchcode: 'B34',
          dateTime: '2024-09-19 20:00',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SESSION BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Friendly' },
          ],
        },
        {
            team1: 'Australia',
            team2: 'New Zeland',
            team1Img: 'assets/aus.png',
            team2Img: 'assets/newzeland.png',
            isLive: false,
            matchcode: 'B34',
            dateTime: '2024-09-19 20:00',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Friendly' },
            ],
        },
        {
            team1: 'France',
            team2: 'Colombia',
            team1Img: 'assets/france.png',
            team2Img: 'assets/colombia.png',
            isLive: false,
            matchcode: 'B34',
            dateTime: '2024-09-19 20:00',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SESSION BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Friendly' },
            ],
        },
      ],
    },
    {
      id: 'tennis',
      name: 'Tennis',
      logo: 'assets/tennis.png',
      matches: [
        {
          team1: 'Player A',
          team2: 'Player B',
          team1Img: 'assets/player_a.png',
          team2Img: 'assets/player_b.png',
          isLive: true,
          matchcode: 'T34',
          bets: [
            { title: 'MATCH BETS', value: '0' },
            { title: 'SET BETS', value: '0' },
            { title: 'MATCH TYPE', value: 'Grand Slam' },
            ],
        },
        {
            team1: 'France',
            team2: 'New Zeland',
            team1Img: 'assets/france.png',
            team2Img: 'assets/newzeland.png',
            isLive: false,
            matchcode: 'T34',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SET BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Grand Slam' },
              ],
          },
          {
            team1: 'Australi',
            team2: 'United State',
            team1Img: 'assets/aus.png',
            team2Img: 'assets/us.png',
            isLive: false,
            matchcode: 'T34',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SET BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Grand Slam' },
              ],
          },
          {
            team1: 'Australi',
            team2: 'United State',
            team1Img: 'assets/aus.png',
            team2Img: 'assets/us.png',
            isLive: false,
            matchcode: 'T34',
            bets: [
              { title: 'MATCH BETS', value: '0' },
              { title: 'SET BETS', value: '0' },
              { title: 'MATCH TYPE', value: 'Grand Slam' },
              ],
          },
        ]
    }]
  