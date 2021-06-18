
// function updateReducer(
//     reducer,
//     initialArg,
//     init,
//   ) {
//     const hook = updateWorkInProgressHook();
//     const queue = hook.queue;
//     invariant(
//       queue !== null,
//       'Should have a queue. This is likely a bug in React. Please file an issue.',
//     );
  
//     queue.lastRenderedReducer = reducer;
  
//     const current = currentHook;
  
//     // The last rebase update that is NOT part of the base state.
//     let baseQueue = current.baseQueue;
//     // 尚未处理的最后一个挂起的更新
//     // The last pending update that hasn't been processed yet.
//     const pendingQueue = queue.pending;
//     //把 pendingQueue 放入 baseQueue , 置空 pending
//     if (pendingQueue !== null) {
//       // We have new updates that haven't been processed yet.
//       // We'll add them to the base queue.
//       if (baseQueue !== null) {
//         // Merge the pending queue and the base queue.
//         const baseFirst = baseQueue.next;
//         const pendingFirst = pendingQueue.next;
//         baseQueue.next = pendingFirst;
//         pendingQueue.next = baseFirst;
//       }
     
//       current.baseQueue = baseQueue = pendingQueue;
//       queue.pending = null;
//     }
  
//     if (baseQueue !== null) {
//       // We have a queue to process.
//       const first = baseQueue.next;
//       let newState = current.baseState;
  
//       let newBaseState = null;
//       let newBaseQueueFirst = null;
//       let newBaseQueueLast = null;
//       let update = first;
//       do {
//         const updateExpirationTime = update.expirationTime;
//         if (updateExpirationTime < renderExpirationTime) {
//           //优先级不足。跳过此更新。如果这是第一个
//           //跳过更新，以前的更新/状态是新的基础
//           //更新/状态。
//           const clone = {
//             expirationTime: update.expirationTime,
//             suspenseConfig: update.suspenseConfig,
//             action: update.action,
//             eagerReducer: update.eagerReducer,
//             eagerState: update.eagerState,
//             next: null,
//           };
//           if (newBaseQueueLast === null) {
//             newBaseQueueFirst = newBaseQueueLast = clone;
//             newBaseState = newState;
//           } else {
//             newBaseQueueLast = newBaseQueueLast.next = clone;
//           }
//           // 更新队列中的剩余优先级。
//           if (updateExpirationTime > currentlyRenderingFiber.expirationTime) {
//             currentlyRenderingFiber.expirationTime = updateExpirationTime;
//             markUnprocessedUpdateTime(updateExpirationTime);
//           }
//         } else {
//           // This update does have sufficient priority.
//           //此更新确实具有足够的优先级。
//           if (newBaseQueueLast !== null) {
//             const clone = {
//               expirationTime: Sync, // This update is going to be committed so we never want uncommit it.
//               suspenseConfig: update.suspenseConfig,
//               action: update.action,
//               eagerReducer: update.eagerReducer,
//               eagerState: update.eagerState,
//               next:null,
//             };
//             newBaseQueueLast = newBaseQueueLast.next = clone;
//           }
  
//           // Mark the event time of this update as relevant to this render pass.
//           // TODO: This should ideally use the true event time of this update rather than
//           // its priority which is a derived and not reverseable value.
//           // TODO: We should skip this update if it was already committed but currently
//           // we have no way of detecting the difference between a committed and suspended
//           // update here.
//           //将此更新的事件时间标记为与此渲染过程相关。
//           // TODO：理想情况下，应使用此更新的真实事件时间，而不是
//           //其优先级，它是派生的且不可逆的值。
//           // TODO：如果已提交但当前不执行此更新，则应跳过此更新
//           //我们无法检测已提交和已暂停之间的差异
//           //在这里更新。
//           markRenderEventTimeAndConfig(
//             updateExpirationTime,
//             update.suspenseConfig,
//           );
  
//           // Process this update.
//           if (update.eagerReducer === reducer) {
//             // If this update was processed eagerly, and its reducer matches the
//             // current reducer, we can use the eagerly computed state.
//             newState = ((update.eagerState: any): S);
//           } else {
//             const action = update.action;
//             newState = reducer(newState, action);
//           }
//         }
//         update = update.next;
//       } while (update !== null && update !== first);
  
//       if (newBaseQueueLast === null) {
//         newBaseState = newState;
//       } else {
//         newBaseQueueLast.next = (newBaseQueueFirst: any);
//       }
//       // Mark that the fiber performed work, but only if the new state is
//       // different from the current state.
//       if (!is(newState, hook.memoizedState)) {
//         markWorkInProgressReceivedUpdate();
//       }
//       hook.memoizedState = newState;
//       hook.baseState = newBaseState;
//       hook.baseQueue = newBaseQueueLast;
  
//       queue.lastRenderedState = newState;
//     }
//     const dispatch = (queue.dispatch: any);
//     return [hook.memoizedState, dispatch];
//   }