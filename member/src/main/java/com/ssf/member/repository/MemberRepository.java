package com.ssf.member.repository;


import com.ssf.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member,Long> {
    Optional<Member> findById(final Long id);
    void deleteById(Long id);
}
