@pokemon.each do |poke|
    json.partial! "api/pokemon/pokemon", poke: poke
end