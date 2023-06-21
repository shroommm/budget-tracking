import moneyUses from "../data/moneyuses.json";
import categories from "../data/categories.json";
import accounts from "../data/accounts.json"
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AsyncStorage} from 'react-native';
import SyncStorage from 'sync-storage';


export const getExpenses =  () => {
  return SyncStorage.get('moneyuses').filter((item) => item.type === "expense");
};

export const getIncomes = () => {
  return SyncStorage.get('moneyuses').filter((item) => item.type === "income");
};

export const getCategories = () => {
  let result  = (SyncStorage.get('categories'));

  return result;
};

export const getExpenseCategories = () => {
  return SyncStorage.get('categories').filter((item) => item.usefor === "expense");
};

export const getIncomeCategories = () => {

  return SyncStorage.get('categories').filter((item) => item.usefor === "income");
};

export const getAccounts = () => {
  console.log(SyncStorage.get('accounts'))
  return SyncStorage.get('accounts');
}

export const addNewCategory = (category) => {
  let categories = getCategories();
  categories.push(category);

  SyncStorage.set('categories',categories);

}

export const addAccount = (moneySource) => {
  let accounts = getAccounts();
  accounts.push(moneySource);

  SyncStorage.set('accounts',accounts);

}
//Data with async storage


// const storeData = async (key, value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(key, jsonValue);
//     console.log('Data stored successfully!');
//   } catch (error) {
//     console.error('Error storing data:', error);
//   }
// };

const storeDataSyncStorage = (key, value) => {
  SyncStorage.set(key, value);
};

// export const initializeSampleDataSet = async () =>{
//   storeData("categories",categories);
//   storeData("accounts",accounts);
//   storeData("moneyuses",moneyUses);
// }

export const initializeSampleDataSetSyncStorage =  () =>{
  
  storeDataSyncStorage("categories",categories);
  storeDataSyncStorage("accounts",accounts);
  storeDataSyncStorage("moneyuses",moneyUses);
}

export function pause(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}