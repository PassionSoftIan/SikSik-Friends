package com.ssf.socket.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Document(collection = "member")
public class HistoryMember {

    @Id
    int userId;

    int allSolvedQuizCount;
    int allCorrectQuizCount;

    int economySolvedQuizCount;
    int economyCorrectQuizCount;

    int livingSolvedQuizCount;
    int livingCorrectQuizCount;

    int scienceSolvedQuizCount;
    int scienceCorrectQuizCount;

    int socialSolvedQuizCount;
    int socialCorrectQuizCount;

    int globalSolvedQuizCount;
    int globalCorrectQuizCount;

    List<Long> historyList;
}