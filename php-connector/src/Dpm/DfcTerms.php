<?php

/*
 * MIT License
 *
 * Copyright (c) 2024 Data Food Consortium
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
namespace DataFoodConsortium\Connector\Dpm;

/**
 * The JSON-LD terms the DPM wire contract uses.
 *
 * hasAssignedScopes, Scope and scope are a de-facto extension: they are absent
 * from the published DFC Technical Ontology, and their dfc-t: prefix resolves
 * to a GitHub blob URL rather than the w3id namespace the rest of the DFC
 * vocabulary uses. They are pinned here as exact strings because the reference
 * client in Food-Data-Collaboration/data-sharing-module matches on them
 * literally.
 */
final class DfcTerms
{
    /** The namespace dfc-t: resolves to in the DPM's JSON-LD context. */
    public const NAMESPACE =
        'https://github.com/datafoodconsortium/ontology/blob/master/src/DFC_TechnicalOntology.owl#';

    /** Compact form of NAMESPACE. */
    public const PREFIX = 'dfc-t:';

    /** The relation from a platform to its scopes. */
    public const HAS_ASSIGNED_SCOPES = 'dfc-t:hasAssignedScopes';

    /** The @type each element of that relation carries. */
    public const SCOPE_TYPE = 'dfc-t:Scope';

    /** The skos:notation literal inside each list element. */
    public const SCOPE_TERM = 'dfc-t:scope';

    /** The @type of the list wrapper itself. */
    public const RDF_LIST = 'rdf:List';
}
