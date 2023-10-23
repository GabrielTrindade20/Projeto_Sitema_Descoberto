package com.projeto.descoberto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.descoberto.model.AreaPoli;
import com.projeto.descoberto.repository.AreaPoliRepository;

@Service
public class ServiceAreaPoli {
    private final AreaPoliRepository areaPoliRepository;

    @Autowired
    public ServiceAreaPoli(AreaPoliRepository areaPoliRepository) {
        this.areaPoliRepository = areaPoliRepository;
    }

    public AreaPoli saveAreaPoli(AreaPoli areaPoli) {
        return areaPoliRepository.save(areaPoli);
    }

    public List<AreaPoli> getAllAreaPolis() {
        return areaPoliRepository.findAll();
    }

    public AreaPoli getAreaPoliById(Long id) {
        return areaPoliRepository.findById(id).orElse(null);
    }

    public void deleteAreaPoli(Long id) {
        areaPoliRepository.deleteById(id);
    }
}
