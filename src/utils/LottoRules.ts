
export const WINNING_NUMBER=[11,16,38,34,21,23];
export const WINNING_NUMBER_BUNUS_NUMBER=1;

export const RESULT_TABLE_KEY_LIST = [6, 5.5, 5, 4, 3, 2, 1, 0];
export const BONUS_CHECK_REQUIRED_COUNT = 5;
export const BONUS_COUNT = 0.5;
export const RESULT_TABLE_DATA = {

    0: {
        DESCRIPTION: '0개',
        PRIZE: 0,
    },
    1: {
        DESCRIPTION: '1개',
        PRIZE: 0,
    },
    2: {
        DESCRIPTION: '2개',
        PRIZE: 0,
    },
    3: {
        DESCRIPTION: '3개',
        PRIZE: 5000,
    },
    4: {
        DESCRIPTION: '4개',
        PRIZE: 50000,
    },
    5: {
        DESCRIPTION: '5개',
        PRIZE: 1500000,
    },
    5.5: {
        DESCRIPTION: '5개 + 보너스볼',
        PRIZE: 30000000,
    },
    6: {
        DESCRIPTION: '6개',
        PRIZE: 2000000000,
    }
}

export const getDrawNumber={

    winngNumber : WINNING_NUMBER,
    bounsNumber : WINNING_NUMBER_BUNUS_NUMBER
}

