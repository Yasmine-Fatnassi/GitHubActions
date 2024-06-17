    const core = require('@actions/core');

    async function run() {
      try {
        const myInput = core.getInput('my-input');
        console.log(`My input is ${myInput}`);
      } catch (error) {
        core.setFailed(error.message);
      }
    }

    run();
