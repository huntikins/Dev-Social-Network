function environmentVariablesCheckerFactory(serviceName) {
  let missingEnvVars = [];
  return {
    checkFor(varName) {
      if (!process.env[varName]) {
        missingEnvVars.push(varName);
        console.log(`Missing environment variable: '${varName}' -> ${serviceName} will not work.`);
      }
    },
    get hasMissingVar() {
      return missingEnvVars.length > 0;
    },
    logAll() {
      if (missingEnvVars.length > 0) {
        console.log(
          `Missing environment variable(s) needed for ${serviceName}:\n` +
          `  ${getListText(missingEnvVars)}\n`,
          `* ${serviceName} will NOT work. *`
        );
      }
    }
  };
}

function getListText(array) {
  let text = '';
  array.forEach((varName, index) => {
    const dispName = `'${varName}'`;
    if (index < array.length - 1) {
      text += dispName + (array.length > 2 ? ', ' : ' ');
    }
    else if (index > 0) {
      text += `and ${dispName}`;
    }
    else {
      text += dispName;
    }
  });
  return text;
}

module.exports = {
  environmentVariablesCheckerFactory
}
