def bulb_switch(n)
   count = 0
   i = 1
    while (i * i <= n)
        count += 1
        i += 1
    end
    return count
end
