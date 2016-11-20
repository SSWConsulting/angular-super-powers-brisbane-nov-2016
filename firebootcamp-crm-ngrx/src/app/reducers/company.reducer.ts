import { Company } from './../company/company';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_COMPANIES = 'ADD_COMPANIES';

export const companyReducer: ActionReducer<Company[]> = (state = [<Company>{}], action: Action) => {
    switch (action.type) {
        case ADD_COMPANIES:
            return action.payload;
        default:
            return state;
    }
};
