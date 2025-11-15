---
layout: section
title: projects

permalink: /projects/
---

# my (on-going) projects

## Detection of viral reads in human unmapped RNA-seq data

**Description:** Human RNAseq data contains useful information, but most of them are discarded after aligning to human reference. To investigate viral gene expression in human infectious diseases, metatranscriptomics data are normally used, but we hypothesized that the use of human RNAseq's unmapped can be used as an exploratory method to study viral infections.

**Tools:** Nextflow, Python, R, nf-core/viralrecon.

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