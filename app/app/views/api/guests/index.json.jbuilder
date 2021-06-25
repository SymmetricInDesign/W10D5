filtered_guests = @guests.select {|guest| guest.age >= 40 && guest.age <= 50}

    json.array! filtered_guests do |guest|
        json.partial! 'api/guests/guest', guest: guest
    end
