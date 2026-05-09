import "./CollaborativeWorkspace.css";

export default function CollaborativeWorkspace() {
  const decisionSteps = [
    "receive_message()",
    "dialogue_analysis.process()",
    "participation.check_imbalance()",
    "participation_intervention?",
    "fading.is_paused()",
    "zpd_estimator.estimate()",
    "select_scaffold_level()",
    "scaffolding_engine.generate()",
    "fading.check_dependency()",
    "ws.push(scaffold_event)",
    "fading.record_progress()",
    "zpd_estimator.update()",
  ];

  return (
    <div className="workspace">

      {/* LEFT SIDEBAR */}
      <div className="sidebar">

        <div className="logoBar">
          <h1>ASS</h1>
          <span>v1.0-proto</span>
        </div>

        {/* TASK */}
        <div className="panel">
          <h3>TASK CONTEXT</h3>

          <div className="taskCard">
            <div className="activeTask">// ACTIVE_TASK</div>

            <h2>AI in Medical Diagnosis</h2>

            <p>
              Analyse the trade-offs between supervised and unsupervised
              learning for a clinical diagnosis system. Consider
              accuracy, interpretability, data requirements,
              and ethical implications.
            </p>
          </div>
        </div>

        {/* PARTICIPATION */}
        <div className="panel">
          <h3>PARTICIPATION MONITOR</h3>

          <div className="participant">
            <div className="participantRow">
              <span>You</span>
              <span>0%</span>
            </div>

            <div className="bar">
              <div className="fill green small"></div>
            </div>
          </div>

          <div className="participant">
            <div className="participantRow">
              <span>Alex</span>
              <span>50%</span>
            </div>

            <div className="bar">
              <div className="fill cyan"></div>
            </div>
          </div>

          <div className="participant">
            <div className="participantRow">
              <span>Sam</span>
              <span>50%</span>
            </div>

            <div className="bar">
              <div className="fill purpleFill"></div>
            </div>
          </div>
        </div>

        {/* FADING */}
        <div className="panel">
          <h3>FADING LIFECYCLE — 4 STATES</h3>

          <div className="fadeItem activeFade">
            <span>● FULL_SCAFFOLD</span>
            <span>L1+L2+L3</span>
          </div>

          <div className="fadeItem">
            <span>● REDUCED</span>
            <span>L1+L2</span>
          </div>

          <div className="fadeItem">
            <span>● MINIMAL</span>
            <span>L1 only</span>
          </div>

          <div className="fadeItem">
            <span>● FULL_FADE</span>
            <span>observer</span>
          </div>
        </div>

        {/* SESSION METRICS */}
        <div className="panel">
          <h3>SESSION METRICS</h3>

          <div className="metricsGrid">

            <div className="metricCard">
              <h2>2</h2>
              <p>messages</p>
            </div>

            <div className="metricCard">
              <h2>0</h2>
              <p>scaffolds</p>
            </div>

            <div className="metricCard">
              <h2>2</h2>
              <p>peer replies</p>
            </div>

            <div className="metricCard">
              <h2>0%</h2>
              <p>dep. risk</p>
            </div>

          </div>
        </div>

      </div>

      {/* CENTER */}
      <div className="chatArea">

        <div className="topBar">
          <span>fading: FULL_SCAFFOLD</span>
          <span>zpd_gap: 0.70</span>
          <span>dep_risk: 0%</span>
        </div>

        <div className="sessionBar">
          SESSION • 00:29 AI in Medical Diagnosis
        </div>

        <div className="messages">

          <div className="message">
            <div className="avatar blue">AL</div>

            <div>
              <h4>Alex</h4>

              <p>
                Alright, let's get started. I think supervised
                learning is the obvious choice for medical diagnosis.
              </p>
            </div>
          </div>

          <div className="message">
            <div className="avatar purple">SM</div>

            <div>
              <h4>Sam</h4>

              <p>
                I'm not sure I fully understand yet — what does
                unsupervised learning actually do in medical diagnosis?
              </p>
            </div>
          </div>

        </div>

        <div className="inputBar">
          <input placeholder="Contribute to the group..." />
          <button>Send ↵</button>
        </div>

      </div>

      {/* RIGHT */}
      <div className="rightPanel">

        {/* ZPD */}
        <div className="panel">
          <h3>ZPD GAP ESTIMATOR</h3>

          <div className="zpdText">
            gap_score: 0.70 • trigger: false
          </div>

          <div className="bar large">
            <div className="fill pink"></div>
          </div>

          <div className="zpdLabels">
            <span>no_gap</span>
            <span>zpd_zone</span>
            <span>beyond</span>
          </div>

          <div className="statusBox">
            High gap — scaffolding active
          </div>
        </div>

        {/* DECISION CYCLE */}
        <div className="panel">
          <h3>12-STEP DECISION CYCLE</h3>

          <div className="decisionList">
            {decisionSteps.map((step, index) => (
              <div key={index} className="decisionItem">
                <span className="stepNumber">{index + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LOG */}
        <div className="panel">
          <h3>SYSTEM LOG</h3>

          <div className="log">
            <p>00:00 ZPDEstimator: gap_prior=0.70</p>
            <p>00:00 ParticipationBalancer loaded</p>
            <p>00:00 AdaptiveScaffoldingEngine active</p>
            <p>00:00 WebSocket ready for session</p>
          </div>
        </div>

        {/* DEMO CONTROLS */}
        <div className="panel">
          <h3>DEMO CONTROLS</h3>

          <div className="controlsGrid">

            <button>Alex dominates</button>
            <button>Sam silent</button>

            <button>Stagnation</button>
            <button>Force L1</button>

            <button>Force L2</button>
            <button>Force L3</button>

            <button className="wideBtn">
              Advance fading
            </button>

            <button>Reset</button>

          </div>
        </div>

      </div>

    </div>
  );
}