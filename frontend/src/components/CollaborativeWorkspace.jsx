import React, { useState, useEffect, useRef } from "react";
import "./CollaborativeWorkspace.css";

export default function CollaborativeWorkspace() {

  const [messages, setMessages] = useState([
    {
      sender: "Alex",
      initials: "AL",
      color: "blue",
      text:
        "Alright, let's get started. I think supervised learning is the obvious choice for medical diagnosis.",
    },
    {
      sender: "Sam",
      initials: "SM",
      color: "purple",
      text:
        "I'm not sure I fully understand yet — what does unsupervised learning actually do in medical diagnosis?",
    },
  ]);
  
  const [input, setInput] = useState("");
  const [selectedUser, setSelectedUser] = useState("You");
  
  
  const [logs, setLogs] = useState([
    "00:00 ZPDEstimator: gap_prior=0.70",
    "00:00 ParticipationBalancer loaded",
    "00:00 AdaptiveScaffoldingEngine active",
    "00:00 WebSocket ready for session",
  ]);

  const [messageCount, setMessageCount] = useState(2);
  const [scaffoldCount, setScaffoldCount] = useState(0);
  const [dependencyRisk, setDependencyRisk] = useState(0);
  const [zpdGap, setZpdGap] = useState(0.70);
  const [systemPaused, setSystemPaused] = useState(false);
  const [pauseMessage, setPauseMessage] = useState("");
  const [participationAlert, setParticipationAlert] = useState(false);
  const [fadingState, setFadingState] = useState("FULL_SCAFFOLD");

  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
  if (!input.trim()) return;

  const userConfig = {
    You: {
      initials: "YO",
      color: "green",
    },
    Alex: {
      initials: "AL",
      color: "blue",
    },
    Sam: {
      initials: "SM",
      color: "purple",
    },
  };

  const userMessage = {
    sender: selectedUser,
    initials: userConfig[selectedUser].initials,
    color: userConfig[selectedUser].color,
    text: input,
  };

  setMessages((prev) => [...prev, userMessage]);

  setMessageCount((prev) => prev + 1);

  const lower = input.toLowerCase();

  setInput("");

  // =========================
  // SCENARIO 2 — DIRECT ANSWER REFUSAL
  // =========================

  if (
    lower.includes("tell us which approach is better")
  ) {

    setDependencyRisk(5);

    setLogs((prev) => [
      ...prev,
      "R3 triggered",
      "Direct answer request detected",
      "Immediate refusal generated",
    ]);

    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        {
          sender: "ASS System",
          initials: "AI",
          color: "pink",
          text:
            "I cannot tell you which is better — but consider what constraints matter most in a clinical setting: is it prediction accuracy, or something else?",
        },
      ]);

    }, 1000);

    return;
  }

  // =========================
  // SCENARIO 2 — DEPENDENCY PAUSE
  // =========================

  if (
    lower.includes("accuracy vs interpretability") ||
    lower.includes("key points")
  ) {

    setDependencyRisk(35);

    setSystemPaused(true);

    setLogs((prev) => [
      ...prev,
      "R4 triggered",
      "Rapid re-request detected",
      "R5 triggered",
      "Dependency pause activated",
    ]);

    setTimeout(() => {

      setMessages((prev) => [
        ...prev,
        {
          sender: "ASS System",
          initials: "AI",
          color: "purple",
          text:
            "I notice this group is turning to me frequently — try working through this together first. What do each of you think the most important trade-off is in a medical diagnosis context?",
        },
      ]);

    }, 1000);

    return;
  }

  // =========================
  // IF SYSTEM PAUSED → SILENT
  // =========================

  if (systemPaused) {

    setLogs((prev) => [
      ...prev,
      "System paused — no scaffold generated",
    ]);

    return;
  }

  // =========================
  // NORMAL SCAFFOLD FLOW
  // =========================

  setTimeout(() => {

    let scaffoldText = "";

    if (
      lower.includes("supervised")
    ) {

      setZpdGap(0.78);

      scaffoldText =
        "Your group seems to be reaching agreement quickly — have you considered what specific characteristics of a clinical diagnosis system might make one approach more suitable than the other?";

    } else {

      scaffoldText =
        "Can the group explain the reasoning behind this conclusion?";
    }

    const scaffoldMessage = {
      sender: "ASS System",
      initials: "AI",
      color: "pink",
      text: scaffoldText,
    };

    setMessages((prev) => [
      ...prev,
      scaffoldMessage,
    ]);

    setLogs((prev) => [
      ...prev,
      "R1 triggered",
      "ZPD stagnation detected",
      "Level 1 scaffold generated",
    ]);

    setScaffoldCount((prev) => prev + 1);

  }, 1200);
};
  

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
            <div className="activeTask">
              // ACTIVE_TASK
            </div>

            <h2>AI in Medical Diagnosis</h2>

            <p>
              Analyse the trade-offs between supervised
              and unsupervised learning for a clinical
              diagnosis system.
            </p>
          </div>
        </div>

        {/* PARTICIPATION */}
        <div className="panel">
          <h3>PARTICIPATION MONITOR</h3>

          <div className="participant">
            <div className="participantRow">
              <span>You</span>
              <span>20%</span>
            </div>

            <div className="bar">
              <div className="fill green"></div>
            </div>
          </div>

          <div className="participant">
            <div className="participantRow">
              <span>Alex</span>
              <span>40%</span>
            </div>

            <div className="bar">
              <div className="fill cyan"></div>
            </div>
          </div>

          <div className="participant">
            <div className="participantRow">
              <span>Sam</span>
              <span>40%</span>
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
            <span>● {fadingState}</span>
          </div>
        </div>

        {/* METRICS */}
        <div className="panel">
          <h3>SESSION METRICS</h3>

          <div className="metricsGrid">

            <div className="metricCard">
              <h2>{messageCount}</h2>
              <p>messages</p>
            </div>

            <div className="metricCard">
              <h2>{scaffoldCount}</h2>
              <p>scaffolds</p>
            </div>

            <div className="metricCard">
              <h2>{messageCount - 1}</h2>
              <p>peer replies</p>
            </div>

            <div className="metricCard">
              <h2>{dependencyRisk}%</h2>
              <p>dep. risk</p>
            </div>

          </div>
        </div>

      </div>

      {/* CENTER */}
      <div className="chatArea">

        <div className="topBar">
          <span>fading: {fadingState}</span>
          <span>zpd_gap: {zpdGap.toFixed(2)}</span>
          <span>dep_risk: {dependencyRisk}%</span>
        </div>

        <div className="sessionBar">
          SESSION • 00:29 AI in Medical Diagnosis
        </div>

        <div className="messages">

          {messages.map((msg, index) => (
            <div key={index} className="message">

              <div className={`avatar ${msg.color}`}>
                {msg.initials}
              </div>

              <div>
                <h4>{msg.sender}</h4>
                <p>{msg.text}</p>
              </div>

            </div>
          ))}

          <div ref={messagesEndRef}></div>

        </div>

        <div className="inputBar">
          <select
  value={selectedUser}
  onChange={(e) => setSelectedUser(e.target.value)}
  className="userSelect"
>
  <option value="You">You</option>
  <option value="Alex">Alex</option>
  <option value="Sam">Sam</option>
</select>


  {/* USER SELECTOR */}
  <select
    value={selectedUser}
    onChange={(e) => setSelectedUser(e.target.value)}
    className="userSelect"
  >
    <option value="You">You</option>
    <option value="Alex">Alex</option>
    <option value="Sam">Sam</option>
  </select>

  <input
    placeholder="Contribute to the group..."
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    }}
  />

  <button onClick={sendMessage}>
    Send ↵
  </button>

</div>

      </div>

      {/* RIGHT */}
      <div className="rightPanel">

        {/* ZPD */}
        <div className="panel">
          <h3>ZPD GAP ESTIMATOR</h3>

          <div className="zpdText">
  gap_score: {zpdGap.toFixed(2)} • trigger: {zpdGap >= 0.75 ? "true" : "false"}
</div>

          <div className="bar large">
            <div className="fill pink"></div>
          </div>

          <div className="statusBox">
            High gap — scaffolding active
          </div>
        </div>

        {/* DECISION */}
        <div className="panel">
          <h3>12-STEP DECISION CYCLE</h3>

          <div className="decisionList">
            {decisionSteps.map((step, index) => (
              <div
                key={index}
                className="decisionItem"
              >
                <span className="stepNumber">
                  {index + 1}
                </span>

                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LOG */}
        <div className="panel">
          <h3>SYSTEM LOG</h3>

          <div className="log">

            {logs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}

          </div>
        </div>
       {/* DEMO CONTROLS */}
<div className="panel">
  <h3>DEMO CONTROLS</h3>

  <div className="controlsGrid">

    <button
      onClick={() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ASS System",
            initials: "AI",
            color: "pink",
            text:
              "Your group seems to be reaching agreement quickly — have you considered what specific characteristics of a clinical diagnosis system might make one approach more suitable than the other?",
          },
        ]);

        setZpdGap(0.78);

        setLogs((prev) => [
          ...prev,
          "R1 Triggered: ZPD stagnation detected",
          "Level 1 scaffold generated",
        ]);

        setScaffoldCount((prev) => prev + 1);
      }}
    >
      Stagnation
    </button>

    <button
      onClick={() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ASS System",
            initials: "AI",
            color: "purple",
            text:
              "We have not heard from everyone yet — what do you think about the trade-offs being discussed?",
          },
        ]);

        setParticipationAlert(true);

        setLogs((prev) => [
          ...prev,
          "R7 Triggered: under participation detected",
          "Participation alert sent",
        ]);
      }}
    >
      Alex dominates
    </button>

    <button
      onClick={() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ASS System",
            initials: "AI",
            color: "pink",
            text:
              "I cannot tell you which is better — but consider what constraints matter most in a clinical setting.",
          },
        ]);

        setDependencyRisk(5);

        setLogs((prev) => [
          ...prev,
          "R3 Triggered: direct answer refusal",
        ]);
      }}
    >
      Direct Answer Ask
    </button>

    <button
      onClick={() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ASS System",
            initials: "AI",
            color: "pink",
            text:
              "I notice this group is turning to me frequently — try working through this together first.",
          },
        ]);

        setDependencyRisk(35);

        setSystemPaused(true);

        setLogs((prev) => [
          ...prev,
          "R5 Triggered: dependency pause activated",
          "System paused for 300 seconds",
        ]);
      }}
    >
      Dependency Pause
    </button>

    <button
      onClick={() => {
        setFadingState("REDUCED");

        setLogs((prev) => [
          ...prev,
          "R9 Triggered: fading advanced to REDUCED",
        ]);
      }}
    >
      Advance Fading
    </button>

    <button
      onClick={() => {
        setMessages([
          {
            sender: "Alex",
            initials: "AL",
            color: "blue",
            text:
              "Alright, let's get started. I think supervised learning is the obvious choice for medical diagnosis.",
          },
          {
            sender: "Sam",
            initials: "SM",
            color: "purple",
            text:
              "I'm not sure I fully understand yet — what does unsupervised learning actually do in medical diagnosis?",
          },
        ]);

        setLogs([
          "00:00 ZPDEstimator: gap_prior=0.70",
          "00:00 ParticipationBalancer loaded",
          "00:00 AdaptiveScaffoldingEngine active",
          "00:00 WebSocket ready for session",
        ]);

        setMessageCount(2);
        setScaffoldCount(0);
        setDependencyRisk(0);
        setZpdGap(0.70);
        setFadingState("FULL_SCAFFOLD");
      }}
    >
      Reset
    </button>

  </div>
</div> 

      </div>

    </div>
  );
}