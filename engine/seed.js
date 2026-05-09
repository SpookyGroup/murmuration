/**
 * Seed Injector for Murmuration
 * Translates Gnosquam bio-trait signals to world params/events.
 */

window.MurmurationModules = window.MurmurationModules || {};

window.MurmurationModules.SeedInjector = class SeedInjector {
  inject(world, signals = {}) {
    // PitViperDivergence → env disturbance
    if ('PitViperDivergence' in signals) {
      world.setEnv('disturbance', signals.PitViperDivergence);
    }

    // ElectroreceptionAnomaly → agent behavior mod (anomaly)
    if ('ElectroreceptionAnomaly' in signals) {
      world.setEnv('anomaly', signals.ElectroreceptionAnomaly);
      // Mod all agents reactivity temporarily
      world.agents.forEach(a => {
        a.personality.reactivity *= (1 + signals.ElectroreceptionAnomaly * 0.5);
      });
    }

    // LateralLinePressure → delayed cascade event
    if ('LateralLinePressure' in signals) {
      world.setEnv('pressure', signals.LateralLinePressure);
      // Delayed cascade: boost divergence next steps
      const cascade = signals.LateralLinePressure;
      setTimeout(() => {
        world.setEnv('disturbance', (world.env.disturbance || 0) + cascade * 2);
      }, 1000); // 1s delay demo
    }

    // EcholocationFrequency → timestep resolution (sim speed)
    if ('EcholocationFrequency' in signals) {
      world.setEnv('timestepRes', signals.EcholocationFrequency);
      // Adaptive step: higher freq = faster sim (demo)
      world.timestepRes = signals.EcholocationFrequency;
    }

    // MantisShrimp16Bands → agent spawning filter
    if ('MantisShrimp16Bands' in signals) {
      world.setEnv('spawnFilter', signals.MantisShrimp16Bands);
      if (signals.MantisShrimp16Bands > 0.7) {
        // Spawn new agents
        const newCount = Math.floor(signals.MantisShrimp16Bands * 10);
        world.initAgents(newCount); // Append
      }
    }
  }

  // Demo: inject from form inputs
  static fromForm() {
    const signals = {};
    const inputs = ['pitviper', 'electroreception', 'lateralline', 'echolocation', 'mantisshrimp'];
    inputs.forEach(id => {
      const val = parseFloat(document.getElementById(id)?.value || 0);
      if (!isNaN(val)) {
        const key = id.charAt(0).toUpperCase() + id.slice(1).replace(/([A-Z])/g, ' $1');
        signals[key] = Math.max(0, Math.min(1, val));
      }
    });
    return signals;
  }
};
