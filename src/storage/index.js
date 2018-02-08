import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
let storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
});
global._storage = storage;
