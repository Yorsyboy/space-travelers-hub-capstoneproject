import React, { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import fetchMission, {
  joinMission,
  leaveMission,
} from "../../redux/mission/mission";

export default function Missions() {
  const missionsApi = useSelector((state) => state.MissionReducer.missions);
  console.log(missionsApi);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMission());
  }, []);

  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {missionsApi.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>
                <div>
                  <h6>ACTIVE</h6>
                </div>
              </td>
              <td>
                {mission.reserved ? (
                  <button
                    type='button'
                    onClick={() => handleLeave(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => handleJoin(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
