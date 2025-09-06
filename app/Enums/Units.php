<?php

namespace App\Enums;

enum Units: string
{
    case ML = 'ml';
    case CL = 'cl';
    case L = 'L';
    case GR = 'gr';
    case KG = 'kg';
    case SP = 'TL';
    case TS = 'EL';
    case CUP = 'Tasse';
    case PIECE = 'Stück';
    case DASH = 'Dash';
}