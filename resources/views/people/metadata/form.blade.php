@extends('layouts.skeleton')

@section('content')

<section class="ph3 ph0-ns">

  <div class="mw7 center br3 ba b--gray-monica bg-white mb6">

    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif

    @include('partials.errors')

  </div>
</section>

@endsection
