import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LeaderBoard = () => {
    const [users, setUsers] = useState(['Mariusz', 'Matt', 'Lauren', 'Beckett', 'Dulio', 'Steve', 'Chris'])
    const [activeUsers, setActiveUsers] = useState(['Myra', 'Clement'])

    const addUser = () => {
        if (!users.length) return;

        const randomIndex = Math.floor(Math.random()*users.length);
        const userToAdd = users[randomIndex];
        const newUsers = [...users];
        newUsers.splice(randomIndex, 1);

        setUsers(newUsers)
        setActiveUsers([...activeUsers, userToAdd])
    }

    const removeUser = () => {
        if (!users.length) return;
        
        const newUsers = [...users];
        const newActiveUsers = [...activeUsers];
        const removedUser = newActiveUsers.splice(newActiveUsers.length - 1);
        newUsers.push(removedUser)

        setUsers(newUsers)
        setActiveUsers(newActiveUsers)
    }
    return (
        <div className="leaderboard">

        <div className="leaderboard-controls">
          <button className="leaderboard-controls__button" onClick={addUser}>
            <svg className="lead_icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129.5 129.5" style={{ enableBackground: 'new 0 0 129.5 129.5' }} xmlSpace="preserve">
              <line className="lead_icon__line" x1="64.8" y1="7.5" x2="64.8" y2="122"/>
              <line className="lead_icon__line" x1="122" y1="64.8" x2="7.5" y2="64.8"/>
            </svg>
          </button>
          <button className="leaderboard-controls__button" onClick={removeUser}>
            <svg className="lead_icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 129.5 129.5" style={{ enableBackground: 'new 0 0 129.5 129.5' }} xmlSpace="preserve">
              <line className="lead_icon__line" x1="122" y1="64.8" x2="7.5" y2="64.8"/>
            </svg>
          </button>
        </div>

        <div className="leaderboard-list">
          <TransitionGroup component={null}>
          {activeUsers.map((userName, index) => (
            <CSSTransition
            key={`user-${index}`}
            timeout={{
              enter: 800,
              exit: 500
            }}
            classNames="leaderboard-list__item-">
              <User userName={userName} index={index} />
            </CSSTransition>
           ))}
          </TransitionGroup>
        </div>

      </div>
    )
}

function User(props) {
    return (
      <div className="leaderboard-list__item">
        <div className="leaderboard-list__item__place">{ props.index + 1 }</div>
        <div className="leaderboard-list__item__name">{ props.userName }</div>
      </div>
    );
}

export default LeaderBoard;