# @param {Float} celsius
# @return {Float[]}
def convert_temperature(celsius)
    return [celsius + 273.15, celsius * 1.80 + 32.00]
end
