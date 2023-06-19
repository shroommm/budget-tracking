import moneyUses from "../data/moneyuses.json";
import categories from "../data/categories.json";
import accounts from "../data/accounts.json"

export const getExpenses = () => {
  return moneyUses.data.filter((item) => item.type === "expense");
};

export const getIncomes = () => {
  return moneyUses.data.filter((item) => item.type === "income");
};

export const getCategories = () => {
  return categories.data;
};

export const getExpenseCategories = () => {
  return categories.data.filter((item) => item.usefor === "expense");
};

export const getIncomeCategories = () => {
  return categories.data.filter((item) => item.usefor === "income");
};

export const getAccounts = () => {
  return accounts.data;
}

