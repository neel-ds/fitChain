pragma solidity ^0.8.0;

contract UserGoals {

    enum Gender {
        MALE,
        FEMALE
    }

    struct User {
        string name;
        uint age;
        uint height;
        uint weight;
        Gender gender;
        uint stepGoal;
        uint sleepGoal;
        uint wellnessGoal;
        uint cardioGoal;
        uint steps;
        uint sleep;
        uint wellness;
        uint cardio;
    }
    mapping(address => User) users;

    function setUserDetails(string memory _name, uint _age, uint _height, uint _weight, Gender _gender) public {
        users[msg.sender].name = _name;
        users[msg.sender].age = _age;
        users[msg.sender].height = _height;
        users[msg.sender].weight = _weight;
        users[msg.sender].gender = _gender;
    }

    function setStepGoal(uint _stepGoal) public {
    users[msg.sender].stepGoal = _stepGoal;
    }

    function setSleepGoal(uint _sleepGoal) public {
        users[msg.sender].sleepGoal = _sleepGoal;
    }

    function setWellnessGoal(uint _wellnessGoal) public {
        users[msg.sender].wellnessGoal = _wellnessGoal;
    }

    function setCardioGoal(uint _cardioGoal) public {
        users[msg.sender].cardioGoal = _cardioGoal;
    }

    function updateSteps(uint _steps) public {
        users[msg.sender].steps += _steps;
    }

    function updateSleep(uint _sleep) public {
        users[msg.sender].sleep += _sleep;
    }

    function updateWellness(uint _wellness) public {
        users[msg.sender].wellness += _wellness;
    }

    function updateCardio(uint _cardio) public {
        users[msg.sender].cardio += _cardio;
    }

    function getUserDetails() public view returns (string memory, uint, uint, uint, Gender) {
        return (users[msg.sender].name, users[msg.sender].age, users[msg.sender].height, users[msg.sender].weight, users[msg.sender].gender);
    }

    function getWeeklyGoals() public view returns (uint, uint, uint, uint) {
        return (users[msg.sender].stepGoal, users[msg.sender].sleepGoal, users[msg.sender].wellnessGoal, users[msg.sender].cardioGoal);
    }

    function getFitWell() public view returns (uint, uint, uint, uint) {
        return (users[msg.sender].steps, users[msg.sender].sleep, users[msg.sender].wellness, users[msg.sender].cardio);
    }
}