
NUM_ANTS = 10
NUM_CITIES = 5
MAX_ITER = 100
ALPHA = 1.0
BETA = 2.0
RHO = 0.5
Q = 100

pheromone = Array.new(NUM_CITIES) { Array.new(NUM_CITIES, 1.0) }
distance = Array.new(NUM_CITIES) { Array.new(NUM_CITIES) { rand(1..10) } }
NUM_CITIES.times { |i| distance[i][i] = 0 } # 自身距离为0
best_path = []
best_length = Float::INFINITY

def calculate_length(path, distance)
  length = 0
  (0...path.length - 1).each do |i|
    length += distance[path[i]][path[i + 1]]
  end
  length += distance[path[-1]][path[0]] # 回到起点
  length
end

def update_pheromone(path, length, pheromone)
  (0...path.length - 1).each do |i|
    pheromone[path[i]][path[i + 1]] += Q / length
    pheromone[path[i + 1]][path[i]] += Q / length
  end
  pheromone[path[-1]][path[0]] += Q / length
end

def ant_colony(pheromone, distance)
  best_length = Float::INFINITY
  best_path = []

  MAX_ITER.times do
    NUM_ANTS.times do
      path = (0...NUM_CITIES).to_a.shuffle # 随机路径
      length = calculate_length(path, distance)

      if length < best_length
        best_length = length
        best_path = path.dup
      end
      update_pheromone(path, length, pheromone)
    end

    # 挤压信息素
    pheromone.each { |row| row.map! { |p| p * RHO } }
  end

  [best_length, best_path]
end

best_length, best_path = ant_colony(pheromone, distance)
puts "最佳路径长度: #{best_length}"
puts "最佳路径: #{best_path.join(' ')}"
