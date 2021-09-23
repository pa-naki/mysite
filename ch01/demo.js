// function parseJSONAsync(json, callback) {
//   setTimeout(() => {
//     try {
//       callback(null, JSON.parse(json));
//     } catch (err) {
//       callback(err);
//     }
//   }, 1000);
// };

// const cache3 = {};
// function parseJSONAsyncWithCache(json, callback) {
//   const cached = cache3[json];
//   if (cached) {
//     // Node.jsのみを対象としたコードの場合
//     process.nextTick(() => callback(cached.err, cached.result));
//     // ブラウザ環境でも動かすコードの場合
//     // 1. queueMicrotask()を使う
//     // queueMicrotask(() => callback(cached.err, cached.result));
//     // 2. Promiseを使う
//     // Promise.resolve().then(() => callback(cached.err, cached.result));
//     return;
//   }
//   parseJSONAsync(json, (err, result) => {
//     cache3[json] = { err, result };
//     callback(err, result);
//   })
// }

// // 1回目の実行
// parseJSONAsyncWithCache(
//   '{"message": "Hello", "to": "World"}',
//   (err, result) => {
//     console.log('1回目の結果', err, result)
//     // コールバックの中で2回目を実行
//     parseJSONAsyncWithCache(
//       '{"message": "Hello", "to": "World"}',
//       (err, result) => {
//         console.log('2回目の結果', err, result)
//       }
//     )
//     console.log('2回目の呼び出し完了', cache3);
//   }
// )
// console.log('1回目の呼び出し完了', cache3);

// function first(arg, callback) {
//   asyncFunc1(arg, (err, result) => {
//     if (err) {
//       return callback(err);
//     }
//     second(result, callback);
//   });
// };


// const toBeFulfilled = parseJSONAsync('{"foo": 1}');
// const toBeRejected = parseJSONAsync('不正なJSON');
// console.log('*************** Promise生成直後 ***************');
// console.log(toBeFulfilled);
// console.log(toBeRejected);
// setTimeout(() => {
//   console.log('*************** 1秒後 ***************');
//   console.log(toBeFulfilled);
//   console.log(toBeRejected);
// }, 1000);

// process.on(
//   'unhandledRejection',
//   (
//     err, // Promiseの拒否理由
//     promise // 放置されたrejectedなPromise
//   ) => {
//     // unhanledRejection発生の原因を調べられるよう、ログ出力などの対応を行う
//     console.error('unhandledRejection発生', err);
//   }
// )

// const fooPromise = Promise.resolve('foo');
// console.log(fooPromise === Promise.resolve(fooPromise));
// console.log(fooPromise);
// console.log(Promise.resolve(fooPromise));

// const stringPromise = Promise.resolve('{"foo": 1}');
// stringPromise;
// console.log(stringPromise);
// const numberPromise = stringPromise.then(str => str.length);
// numberPromise;
// stringPromise;
// console.log(stringPromise);
// process.nextTick(() => {
//   console.log(numberPromise);
// });

// const unrecoveredPromise = Promise.reject(new Error('エラー')).then(() => 1);
// setTimeout(() => {
//   console.log(rejectedPromise);
// }, 0);

// const rejectedPromise = Promise.reject(new Error('エラー')).then(() => 1, err => err.message)
// const rejectedPromise = stringPromise.then(() => { throw new Error('エラー')});
// const objPromise = stringPromise.then(parseJSONAsync);

// function parseJSONAsync (json) {
// // Promiseインスタンスを生成して返す(この時点ではpending状態)
// return new Promise((resolve, reject) => 
// setTimeout(() => {
// try {
//   // fulfilled状態にする(解決)
//   console.log("まだやってるよ");
//   resolve(JSON.parse(json));
// } catch (err) {
//   // rejected状態にする(拒否)
//   reject(err);
// };
// }, 1000)
// );
// };

// objPromise.then(() => {
//   console.log(objPromise);
// })

// const rejectedObjPromise = Promise.resolve('不正なJSON').then(parseJSONAsync)

// const withoutOnFulfilled = Promise.reject(new Error('エラー')).then(undefined, () => 0);

// setTimeout(() => {
//   console.log(catchedPromise);
// }, 0);

// const catchedPromise = Promise.reject(new Error('エラー')).catch(() => 0)

// function doSomethingAsync(input) {
//   return asyncFunc1(input)
//     .catch(err => {
//       // エラー発生時に必要な処理を行う
//       // ここでは、デバッグ用にログを出力する
//       console.error('asyncFunc1でエラー発生', err);
//       throw err // または return Promise.reject(err);
//     })
// }

// const onFinally = () => console.log('finallyのコールバック');

// // Promise.resolve().finally(onFinally);
// Promise.reject(new Error('エラー')).finally(onFinally);

// const returnValueInFinally = Promise.resolve(1).finally(() => 2);

// returnValueInFinally.then(() => {
//   console.log(returnValueInFinally);
// })

// const allResolved = Promise.all([
//   setTimeout(() => {
//     return Promise.resolve(1);
//   }, 0),
//   Promise.resolve('foo'),
//   Promise.resolve(true),
// ]);

// allResolved.then(console.log);

// 1秒かかる非同期処理
// const {
//   constants,
//   performance,
//   performanceObserver
// } = require('perf_hooks');

// function asyncFunc() {
//   return new Promise(resolve => {
//     console.log("走ったよ");
//     return setTimeout(resolve, 1000);
//   })
// };

// // perf_hooks.performance.now()で現在時刻を取得
// const start = performance.now();

// // 逐次実行
// asyncFunc()
//   .then(asyncFunc)
//   .then(asyncFunc)
//   .then(asyncFunc)
//   .then(() => 
//     console.log('逐次実行所要時間', performance.now() - start)
//   )

// Promise
//   .all([
//     asyncFunc(),
//     asyncFunc(),
//     asyncFunc(),
//     asyncFunc(),
//   ])
//     .then(() => {
//       console.log('並行実行所要時間', performance.now() - start);
//     })
 
