define(function() {
  var adjectives = ["fancy", "insane", "fuzzy", "shiny", "intense", "bold", "bright", "feathery", "innert"],
      nouns = ["dog", "house", "office", "computer", "person", "cat", "bird", "car"],
      randomNumMax = 999999,
      randomNumMin = 100000,
      emptyFunction = function() {},
      randomArrayValue, randomName;

  randomArrayValue = function(arr) {
    var len = arr.length,
        idx = Math.floor(Math.random() * len);

    return arr[idx];
  };

  return function() {
    var name = [randomArrayValue(adjectives), randomArrayValue(nouns)],
        num = Math.floor(Math.random() * (randomNumMax - randomNumMin) + randomNumMin);
    name.push(num);

    return name.join("-");
  };
});