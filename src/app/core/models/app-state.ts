import { AuthState } from '../auth/auth.reducer';
import { SettingsState } from '../../settings/settings.reducer';
import { StockMarketState } from '@app/examples/stock-market/stock-market.reducer';
import { TodosState } from '../../examples/todos/todos.reducer';
import { RefState } from '../reference/refdata.reducer';
import { DashboardState } from '../../dashboard/dashboard-state';

export interface AppState {
  auth: AuthState,
  ref: RefState
  settings: SettingsState,
  dashboard: DashboardState
  example: {
    stock: StockMarketState,
    todo: TodosState
  }
}
