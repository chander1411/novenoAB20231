export enum RabbitMQ {
  PersonaQueue = 'personas',
  SoftwareQueue = 'softwares',
  FlightQueue = 'flights',
  StudentQueue = 'students',
}

export enum PersonaMSG {
  CREATE = 'CREATE_PERSONA',
  FIND_ALL = 'FIND_PERSONAS',
  FIND_ONE = 'FIND_PERSONA',
  UPDATE = 'UPDATE_PERSONA',
  DELETE = 'DELETE_PERSONA',
}

export enum StudentMSG {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
  VALID_USER = 'VALID_STUDENT',
}

export enum SoftwareMSG {
  CREATE = 'CREATE_SOFTWARE',
  FIND_ALL = 'FIND_SOFTWARES',
  FIND_ONE = 'FIND_SOFTWARE',
  UPDATE = 'UPDATE_SOFTWARE',
  DELETE = 'DELETE_SOFTWARE',
}

export enum FlightMSG {
  CREATE = 'CREATE_FLIGHT',
  FIND_ALL = 'FIND_FLIGHTS',
  FIND_ONE = 'FIND_FLIGHT',
  UPDATE = 'UPDATE_FLIGHT',
  DELETE = 'DELETE_FLIGHT',
  ADD_PASSENGER = 'ADD_PASSENGER',
}
