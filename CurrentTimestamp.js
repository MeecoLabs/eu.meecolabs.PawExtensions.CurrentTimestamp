const CurrentTimestamp = function () {
  this.evaluate = (_context) => {
    switch (this.format) {
      case 'unixSec':
        return Math.floor(Date.now() / 1000);

      case 'unixMs':
        return Date.now();

      case 'iso':
      default:
        return new Date().toISOString();
    }
  };

  this.title = (_context) => {
    return CurrentTimestamp.title;
  };

  this.text = (_context) => {
    switch (this.format) {
      case 'unixSec':
        return 'Unix secs';

      case 'unixMs':
        return 'Unix ms';

      case 'iso':
      default:
        return 'ISO';
    }
  };
};

CurrentTimestamp.identifier = 'eu.meecolabs.PawExtensions.CurrentTimestamp';
CurrentTimestamp.title = 'Current Timestamp';

CurrentTimestamp.inputs = [
  InputField('format', 'Format', 'Select', {
    choices: {
      iso: 'ISO 8601',
      unixSec: 'Unix timestamp (seconds)',
      unixMs: 'Unix timestamp (ms)'
    },
    persisted: false
  })
];

registerDynamicValueClass(CurrentTimestamp);
