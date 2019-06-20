module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  const enhancement = item.enhancement;
  if (item.enhancement === 20) {
    return { ...item, enhancement: enhancement };
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}

function fail(item) {
  if (item.enhancement >= 15 && item.enhancement > 16) {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10,
    };
  } else if (item.enhancement >= 15) {
    return {
      ...item,
      durability: item.durability - 10,
    };
  } else {
    return {
      ...item,
      durability: item.durability - 5,
    };
  }
}

function repair(item) {
  if (item.durability !== 100) {
    return { ...item, durability: 100 };
  } else {
    null;
  }
}

function get(item) {
  return { ...item };
}
