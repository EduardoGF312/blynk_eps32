module.exports = function override(config, env) {
    // Agregar fallback para util
    config.resolve.fallback = {
      util: require.resolve("util/"),
      net: require.resolve("net"),
    };
  
    return config;
  };