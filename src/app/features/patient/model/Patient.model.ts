export interface Patient { 
    pairing: boolean, 
    createdAt: string, 
    firstName: string, 
    lastName: string, 
    dominantHand: string, 
    gender: string, 
    medicalInfo: { 
        SEPType: string, 
        scoreEDSS: string, 
        walkingStickAid: boolean, 
        crutchesAid: boolean, 
        wheelChairAid: boolean, 
        walkerAid: boolean, 
        walkWithCaregiverAid: boolean, 
        factors: { 
            firstDegree: boolean, 
            secondDegree: boolean, 
            noDegree: boolean, 
            notSure: boolean 
        } 
    }, 
    id: number 
}