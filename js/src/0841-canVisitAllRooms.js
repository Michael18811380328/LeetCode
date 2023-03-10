/**
 * @param {number[][]} rooms
 * @return {boolean}
 * DFS 或者 BFS 可以实现
 * https://leetcode.cn/problems/keys-and-rooms/
 */
const canVisitAllRooms = function(rooms) {
  // 辅助函数，深度优先遍历房间
  const checkRoom = (room) => {
    if (room.visited) return;
    room.visited = true;
    room.forEach((item) => {
      checkRoom(rooms[item]);
    });
  };
  checkRoom(rooms[0]);
  return !rooms.some((item) => !item.visited);
};

// console.log(canVisitAllRooms([[1],[2],[3],[]])) // true
// console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])) // false

export { canVisitAllRooms };
