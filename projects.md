---
layout: section
title: projects
permalink: /projects
---

### [home](/) | [projects](/projects.html) | [resources](/resources.html) | [posts](/posts.html)

# my (on-going) projects

## CO-SPATIAL pipeline

**Description:** CO-SPATIAL is a bioinformatics pipeline that leverages the co-profiling sequencing technologies for both spatial transcriptomics and spatial epigenomics. It includes pre-processing & some simple downstream analysis using ArchR & Signac.

**Tools:** Nextflow, Docker, Singularity, R (ArchR, Signac), CellRanger

## Responsible AI for Genomics Research
**Description:** 
Evaluating published models in genomics research for FAIRness & explainability. I incorporated the model training with LIME & SHAP to investigate the results found.

**Tools:** LIME, SHAP, PyTorch

## Biofetch: Nextflow pipeline to parallely download sequencing data

**Description:** 
For re-analysis, it's often time-consuming to wait for your "curl" command to finish retrieving that 8Gb FASTQ reads. Here, biofetch supports multi-fetching of FASTQ files using a Nextflow-based structure, which allows downloading data from widely-used deposit data platforms such as `NCBI`, `ENA` & `GEO`.

**Tools:** Nextflow, sra-toolkit