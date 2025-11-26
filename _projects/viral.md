---
layout: project

title: Viral detection in public human RNAseq data
overview: "
Cervical cancer is one of the leading causes of death in women, ranking as the fourth most
common cancer type worldwide. Human papillomavirus (HPV) is known to be a driver in
causing cervical cells to grow abnormally. Yet, in human transcriptomics sequencing, most of the
reads unaligned to the human reference are usually discarded even though they may contain
useful taxonomic and viral expression information. Here we propose that by developing a
workflow to preserve and analyze viral reads found in human samples, viral strains identification
can support diagnostic potential in virus-associated human cancers. We aligned dehosted reads
from human cervical cancer to a curated viral database, showing that there are differences in
gene expression between HPV-specific infected samples using public datasets. We used the gene
expression matrix as features for model training, and found that viral reads can potentially be
used for classification tasks.
"
skills: Nextflow, sra-toolkits
thumbnail: [/assets/img/viral.svg,/assets/img/viral_2.png]
tools: [nextflow, nf-core, R]
---